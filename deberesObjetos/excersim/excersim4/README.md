# Documentación del Proyecto de Decodificación de Resistencias

## Importación de Módulos y Definición de Constantes y Tipos

- Se importa React y la función useState desde el paquete 'react'.
- Se define una constante COLORS que contiene los colores utilizados en las bandas de las resistencias.
- Se define un tipo TResistorColors que representa los colores de las bandas de resistencia.

## Función `decodedValue`

Esta función toma un array con dos colores de resistencia y devuelve el valor numérico de la resistencia codificada. Utiliza el método `indexOf` de los arrays para encontrar la posición de cada color en el array COLORS. El valor de la resistencia se calcula multiplicando el índice del primer color por 10 y sumándole el índice del segundo color.

## Componente `App`

Se define el componente principal de la aplicación.

### Estados

Se utiliza el hook useState para crear dos estados, `band1` y `band2`, que representan los colores seleccionados para las dos primeras bandas de la resistencia.

### Funciones de Manejo de Eventos

- `handleChangeBand1`: Actualiza el estado `band1` cuando se selecciona un color diferente en el dropdown de la primera banda.
- `handleChangeBand2`: Actualiza el estado `band2` cuando se selecciona un color diferente en el dropdown de la segunda banda.
- `handleCalculate`: Calcula el valor de la resistencia decodificada llamando a la función `decodedValue` con los colores seleccionados y muestra el resultado en un cuadro de alerta.

### Renderizado

En el retorno del componente, se renderizan dos dropdowns (`<select>`) para seleccionar los colores de las dos primeras bandas de la resistencia, cada uno con opciones generadas dinámicamente a partir de la constante `COLORS`. También se incluye un botón que al hacer clic llama a la función `handleCalculate`.

