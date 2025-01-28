import subprocess
import os

metadata_decode = {
	"1":r"metadatas\metadata-Patryk.yaml",
	"2":r"metadatas\metadata-Patryk.yaml",
	"3":r"metadatas\metadata-Eryk.yaml",
	"4":r"metadatas\metadata-Zuzia.yaml",
	"5":r"metadatas\metadata-Szymon.yaml",
	"6":r"metadatas\metadata-Antek.yaml",
	"7":r"metadatas\metadata-Adam.yaml",
	"8":r"metadatas\metadata-Bartek.yaml",
	"9":r"metadatas\metadata-Dawid.yaml",
	"10":r"metadatas\metadata-Antek.yaml",
	"11":r"metadatas\metadata-Krysia.yaml",
	"12":r"metadatas\metadata-Dawid.yaml",
	"13":r"metadatas\metadata-Szymon.yaml",
	"14":r"metadatas\metadata-Adam.yaml",
	"15":r"metadatas\metadata-Zuzia.yaml",
	"16":r"metadatas\metadata-Krysia.yaml",
	"17":r"metadatas\metadata-Eryk.yaml",
	"18":r"metadatas\metadata-Adam.yaml"
}

def main() -> None:
	root_dir = os.getcwd()
	
	mdfiles = []
	
	os.chdir("md")
	for folder in os.listdir():
		os.chdir(folder)
		for mdfile in [os.path.join(os.getcwd(), entry) for entry in os.listdir(os.getcwd())]:
			mdfiles.append(mdfile)
		
		os.chdir("..")
	os.chdir("..")
	
	for file in mdfiles:
		source_file = file
		destination_file = file.replace("md", "pdf")
		print(source_file)
		print(destination_file)
		print('\\'.join(destination_file.split("\\")[:-1]))
		
		if not os.path.exists('\\'.join(destination_file.split("\\")[:-1])):
			os.mkdir('\\'.join(destination_file.split("\\")[:-1]))
		
		metadata = destination_file.split('\\')[-2].split('-')[0]
		metadata = metadata_decode[metadata]
		
		print(os.getcwd())
		subprocess.check_call(["pandoc", source_file, "-o", destination_file, "-V lang=pl-PL", f"--metadata-file={metadata}"])

	
if __name__ == "__main__":
	main()