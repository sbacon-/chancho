#include <fstream>
#include <iostream>
#include <cstdio>
#include <string>
#include <algorithm>
#include <filesystem>

int main(){
	std::string manifest_path {"manifest.chancho"};
	std::remove(manifest_path.c_str());
	std::ofstream outf {manifest_path};
	std::string folder_path {"manifest"};
	
	for(const auto &entry : std::filesystem::directory_iterator(folder_path)){
		
		std::string file_path {entry.path()};	
		std::replace(file_path.begin(),file_path.end(),'-','/');
		file_path = "---"+file_path.substr(folder_path.size()+1);
		outf<<file_path<<'\n';

		std::ifstream inf {entry.path()};
		std::string line;
		while(inf){
			std::getline(inf,line);
			outf<<line<<'\n';
		}

		outf<<'\n';
		//Close the files
		inf.close();
	}

	outf.close();
	return 0;
}




