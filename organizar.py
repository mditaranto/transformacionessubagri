import os
import shutil

# Ruta del directorio donde están tus HTML
html_root = "./en"  # Puedes cambiarlo por la ruta que quieras

# Recorremos todos los archivos en el directorio
for filename in os.listdir(html_root):
    # Saltamos si no es .html o si es el index principal
    if not filename.endswith(".html") or filename == "index.html":
        continue

    # Obtenemos el nombre base sin extensión
    base_name = os.path.splitext(filename)[0]

    # Creamos una carpeta con ese nombre
    folder_path = os.path.join(html_root, base_name)
    os.makedirs(folder_path, exist_ok=True)

    # Ruta completa al archivo original
    src_path = os.path.join(html_root, filename)

    # Ruta de destino: carpeta/nuevo index.html
    dst_path = os.path.join(folder_path, "index.html")

    # Movemos y renombramos
    shutil.move(src_path, dst_path)
    print(f"✅ {filename} → {dst_path}")












