#include <fstream>
#include <iostream>
#include <cstdio>
#include <string>
#include <algorithm>

int main(){
	std::ifstream manifest {"manifest.chancho"};
	if(!manifest){
		std::cerr<<"Could not open manifest for reading!\n";
		return 1;
	}
	//Parsing the manifest
	std::string manifest_line;
	std::getline(manifest, manifest_line);
	while(manifest){	
		std::replace(manifest_line.begin(),manifest_line.end(),'/','-');
		std::string file_path = "manifest/";
		file_path+=manifest_line.substr(3);
		std::remove(file_path.c_str());

		//Create output file
		std::cout<<file_path<<'\n';
		std::ofstream outf {file_path};
		if(!outf){
			std::cerr<<"Could not open "<<manifest_line<<" for writing!\n";
			return 1;
		}

		//Insert items from the manifest
		std::getline(manifest,manifest_line);
		std::string_view man_line {manifest_line};
		while(man_line.compare(0,3,"---")&&manifest){
			std::cout<<man_line<<'\n';
			outf<<man_line<<'\n';
			std::getline(manifest,manifest_line);
			man_line = manifest_line;
		}

		//Close the files
		outf.close();
	}
	return 0;
}




