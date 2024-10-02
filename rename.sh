#!/bin/bash

# Directorio base
BASE_DIR="apps/"

# Recorremos recursivamente todos los ficheros y directorios
# -depth asegura que se procesen primero los archivos dentro de directorios profundos
find "$BASE_DIR" -depth -name "*burger*" | while read FILE_PATH; do
    # Directorio o archivo original
    DIR_NAME=$(dirname "$FILE_PATH")
    BASE_NAME=$(basename "$FILE_PATH")

    # Si el nombre base contiene 'burger'
    if [[ "$BASE_NAME" == *"burger"* ]]; then
        # Generamos el nuevo nombre reemplazando 'burger' por 'burger'
        NEW_BASE_NAME=$(echo "$BASE_NAME" | sed 's/burger/burger/g')
        NEW_FILE_PATH="$DIR_NAME/$NEW_BASE_NAME"

        # Renombrar el fichero o directorio
        mv "$FILE_PATH" "$NEW_FILE_PATH"

        echo "Renombrado: $FILE_PATH -> $NEW_FILE_PATH"
    fi
done
