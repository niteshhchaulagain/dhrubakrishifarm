import re
import uuid

FILE_PATH = "data/products.js"

with open(FILE_PATH, "r", encoding="utf-8") as file:
  content = file.read()

def replace_id(match):
  old_id = match.group(1)
  new_id = str(uuid.uuid4())

  print(f"ID Changed: {old_id} -> {new_id}")
  return f'"id": "{new_id}"'

updated_content = re.sub(
  r'"id"\s*:\s*"([^"]+)"',
  replace_id,
  content
)


with open(FILE_PATH, "w", encoding="utf-8") as file:
    file.write(updated_content)

print("\nAll product IDs have been replaced successfully.")