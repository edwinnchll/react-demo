from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import tensorflow as tf
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)

# Load dataset
dataset = pd.read_csv('Weather.csv')

# Convert date to numerical representation
dataset['Date'] = pd.to_datetime(dataset['Date'])
dataset['Date'] = dataset['Date'].dt.month * 30 + dataset['Date'].dt.day  # Assuming month*30 + day

# Extract features and target
X = dataset[['Rainfall', 'MaxTemperature', 'MinTemperature', 'Date']].values
y = dataset['Rainfall'].values

# Standardize features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Define neural network architecture
model = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(X_scaled.shape[1],)),
    tf.keras.layers.Dense(32, activation='relu'),
    tf.keras.layers.Dense(1)
])

# Compile model
model.compile(optimizer='adam', loss='mean_squared_error')

# Train model with all data
model.fit(X_scaled, y, epochs=50, batch_size=32)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    input_data = np.array([data['Rainfall'], data['MaxTemperature'], data['MinTemperature'], data['Date']])
    input_data_scaled = scaler.transform(input_data.reshape(1, -1))
    prediction = model.predict(input_data_scaled)[0][0]
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)
