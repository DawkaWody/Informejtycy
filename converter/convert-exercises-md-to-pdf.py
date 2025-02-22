from __future__ import unicode_literals

import subprocess
import os

INPUT_DIR = "../to_be_converted"
OUTPUT_DIR = "../src/content/exercises"

# metadata_decode = {
# 	"1 01":r"metadatas\metadata-Patryk.yaml",
# 	"1 02":r"metadatas\metadata-Patryk.yaml",
# 	"1 03":r"metadatas\metadata-Eryk.yaml",
# 	"1 04":r"metadatas\metadata-Zuzia.yaml",
# 	"1 05":r"metadatas\metadata-Antek.yaml",
# 	"1 06":r"metadatas\metadata-Zuzia.yaml",
# 	"1 07":r"metadatas\metadata-Szymon.yaml",
# 	"1 08":r"metadatas\metadata-Antek.yaml",
# 	"1 09":r"metadatas\metadata-Adam.yaml",
# 	"1 10":r"metadatas\metadata-Antek.yaml",
# 	"1 11":r"metadatas\metadata-Eryk.yaml",
# 	"1 12":r"metadatas\metadata-Szymon.yaml",
# 	"1 13":r"metadatas\metadata-Zuzia.yaml",
# 	"1 14":r"metadatas\metadata-Krysia.yaml",
# 	"1 15":r"metadatas\metadata-Antek.yaml",
# 	"2 01":r"metadatas\metadata-Bartek.yaml",
# 	"2 03":r"metadatas\metadata-Krysia.yaml",
# 	"2 04":r"metadatas\metadata-Dawid.yaml",
# 	"2 05":r"metadatas\metadata-Szymon.yaml",
# 	"2 06":r"metadatas\metadata-Adam.yaml",
# 	"2 07":r"metadatas\metadata-Zuzia.yaml",
# 	"2 08":r"metadatas\metadata-Krysia.yaml",
# 	"2 09":r"metadatas\metadata-Eryk.yaml",
# 	"2 10":r"metadatas\metadata-Adam.yaml"
# }
# windows

metadata_decode = {
    "1 01":"metadatas/metadata-Patryk.yaml",
    "1 02":"metadatas/metadata-Patryk.yaml",
    "1 03":"metadatas/metadata-Eryk.yaml",
    "1 04":"metadatas/metadata-Zuzia.yaml",
    "1 05":"metadatas/metadata-Antek.yaml",
    "1 06":"metadatas/metadata-Zuzia.yaml",
    "1 07":"metadatas/metadata-Szymon.yaml",
    "1 08":"metadatas/metadata-Antek.yaml",
    "1 09":"metadatas/metadata-Adam.yaml",
    "1 10":"metadatas/metadata-Antek.yaml",
    "1 11":"metadatas/metadata-Eryk.yaml",
    "1 12":"metadatas/metadata-Szymon.yaml",
    "1 13":"metadatas/metadata-Zuzia.yaml",
    "1 14":"metadatas/metadata-Krysia.yaml",
    "1 15":"metadatas/metadata-Antek.yaml",
    "2 01":"metadatas/metadata-Bartek.yaml",
    "2 03":"metadatas/metadata-Krysia.yaml",
    "2 04":"metadatas/metadata-Dawid.yaml",
    "2 05":"metadatas/metadata-Szymon.yaml",
    "2 06":"metadatas/metadata-Adam.yaml",
    "2 07":"metadatas/metadata-Zuzia.yaml",
    "2 08":"metadatas/metadata-Krysia.yaml",
    "2 09":"metadatas/metadata-Eryk.yaml",
    "2 10":"metadatas/metadata-Adam.yaml"
}
# linux

def check_for_software_existance() -> None:
	try:
		subprocess.run(["pandoc", "-v"], stderr=subprocess.STDOUT).stdout
	except FileNotFoundError:
		print("Software is missing: pandoc (C) 2006-2024 John MacFarlane")
		exit(-1)

	try:
		subprocess.run(["miktex", "--version"], stderr=subprocess.STDOUT).stdout
	except FileNotFoundError:
		print("Software is missing: One MiKTeX Utility © 2024 Christian Schenk")
		exit(-2)

def run_pandoc(source_file: str, destination_file: str, metadata: str) -> str:
	print("Compiling...")
	try:
		return subprocess.run(["pandoc", source_file, "-o", destination_file, "-V lang=pl-PL", f"--metadata-file={metadata}"], shell=False, stderr=subprocess.STDOUT).stdout
	except Exception as e:
		print(f"Something went wrong... {e.__class__.__name__}: {e}")
		exit(-3)

def main() -> None:
	check_for_software_existance()
	ROOT_DIR = os.getcwd()
	mdfiles = []
	
	os.chdir(INPUT_DIR)
	for file in os.listdir():
		mdfiles.append(file)
	os.chdir(ROOT_DIR)
	
	should_ask = True
	
	for file in mdfiles:
		source_file = os.path.join(INPUT_DIR, file)
		destination_file = file[:-2]+"pdf"
		metadata = metadata_decode[' '.join(destination_file.split('\\')[0].split('-')[:2])]
		destination_file = os.path.join(OUTPUT_DIR, destination_file)
		
		print(f"\nSource file: {source_file}")
		print(f"Destination file: {destination_file}")
		print(f"Chosen metadate: {metadata}")
		
		option = "y"
		if should_ask:
			option = input("Want to compile? [<any>/all/n/stop] ")
		
		if option == "n":
			continue
		elif option == "all":
			should_ask = False
			run_pandoc(source_file, destination_file, metadata)
		elif option == "stop":
			break
		else:
			run_pandoc(source_file, destination_file, metadata)

	
if __name__ == "__main__":
	main()