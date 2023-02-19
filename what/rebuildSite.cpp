#include <fstream>
#include <iostream>
#include <cstdio>
#include <string>

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

		//Open Index Template
		std::ifstream index_template {"indexTemplate.chancho"};
		if(!manifest){
			std::cerr<<"Could not open indedTemplate for reading!\n";
			return 1;
		}
		
		//Delete file if it exists
		std::string file_path = manifest_line.substr(3)+".html";
		std::remove(file_path.c_str());

		//Create output file
		std::ofstream outf {file_path};
		if(!outf){
			std::cerr<<"Could not open "<<manifest_line<<" for writing!\n";
			return 1;
		}

		//Add top of Index Template
		std::string inLine;
		std::getline(index_template,inLine);
		std::string_view line {inLine};
		while(line.compare(0,6,"INSERT")){
			std::cout<<line<<'\n';
			outf<<line.substr(0,line.size()-1)<<'\n';
			std::getline(index_template,inLine);
			line = inLine;
		}

		//Insert items from the manifest
		std::getline(manifest,manifest_line);
		std::string_view man_line {manifest_line};
		while(man_line.compare(0,3,"---")&&manifest){
			//std::cout<<man_line<<'\n';
			outf<<man_line<<'\n';
			std::getline(manifest,manifest_line);
			man_line = manifest_line;
		}

		//Add the rest of the Index Template
		std::getline(index_template,inLine);
		line = inLine;
		while(index_template){
			std::cout<<line<<'\n';
			outf<<line.substr(0,line.size()-1)<<'\n';
			std::getline(index_template,inLine);
			line = inLine;
		}

		//Close the files
		index_template.close();
		outf.close();
	}
	return 0;
}




