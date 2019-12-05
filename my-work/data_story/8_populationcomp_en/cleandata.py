import json
from pprint import pprint
import os

# with open("comp/alberta.geojson", "r") as jsonfile:
#     data = json.load(jsonfile)
#     pprint(data)
countryDict = {}
for filename in os.listdir("comp"):
    # if filename == "london.geojson": continue
    with open("comp/"+filename, "r") as jsonfile:
        countryname = filename.split(".")[0]
        # print(countryname)
        data = json.load(jsonfile)
        # pprint(data)
        countryDict[countryname] = data

# pprint(countryDict)
with open("compdataComplete.json", "w") as outfile:
    json.dump(countryDict, outfile, indent=4)
