import json
import pandas as pd
import tensorflow as tf

# Cargar el archivo JSON
with open('productos_data.json', 'r') as file:
    data = json.load(file)

# Convertir los datos a un DataFrame de pandas
df = pd.DataFrame(data)

# Preparar los datos para el entrenamiento
X_train = df[['precio', 'categoria_id', 'latitud', 'longitud', 'promedioCalificaciones']].values
y_train = df['precio'].values  # Predicción del precio basado en características

# Crear el modelo de regresión lineal
model = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=[X_train.shape[1]]),
    tf.keras.layers.Dense(32, activation='relu'),
    tf.keras.layers.Dense(1)  # Capa de salida con una neurona
])

# Compilar el modelo
model.compile(optimizer='adam', loss='mean_squared_error')

# Entrenar el modelo
history = model.fit(X_train, y_train, epochs=100, validation_split=0.2)  # Usa un 20% de los datos para validación

# Guardar el modelo entrenado
model.save('/ml-servide/ML-OP/Modelo-Precios/modelo_optimizacion_precios.h5')

# Opcional: Guardar la historia del entrenamiento para análisis posterior
with open('history.json', 'w') as f:
    json.dump(history.history, f)

print('Modelo entrenado y guardado como modelo_optimizacion_precios.h5')
