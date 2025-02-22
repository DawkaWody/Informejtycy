import os
import re

def change_filename(filename: str) -> str:
	pattern = r'(\d+)-(\d{1,2})-(.*)\.md'
	regex = re.match(pattern, filename)
	return f"{regex.group(1)}-{regex.group(2).zfill(2)}-{regex.group(3)}.md" if regex else ""

def change_in_directory(input_directory: str) -> None:
    for filename in os.listdir(input_directory):
        filename_path = os.path.join(directory, filename)

        if os.path.isfile(filename_path):
            new_filename = change_filename(filename)
            if new_filename:
                os.rename(filename_path, os.path.join(input_directory, new_filename))
                print(f"Filename changed: {filename} -> {new_filename}")

directory = input("Type input directory: ")
change_in_directory(directory)
