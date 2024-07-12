'''
pip3 install patool
pip3 install pyunpack
pip3 install openpyxl
brew install rar
'''

import patoolib
import os
from os import listdir
from os.path import isfile, join
from pathlib import Path
from pyunpack import Archive
import openpyxl as xl
import shutil
count = 0
files = listdir('.')
files.sort()
for file in files:
    if file.lower().endswith(('.rar', '.zip')):
        count = count + 1
        file_name = Path(file).stem
        destination_path = './' + file_name + "/"

        try:
            if not Path(destination_path).exists():
                os.makedirs(destination_path)
            else:
                shutil.rmtree(destination_path)
                os.makedirs(destination_path)
                
            Archive(file).extractall(destination_path)

            if os.path.exists(file):
                os.remove(file)
        except Exception as ex:
            print("Cannot extract: " + file)
            print(ex)

print("Unzip Finished, there are " + str(count) + " files")
print("done")

