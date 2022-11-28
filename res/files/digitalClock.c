#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define WIDTH 8
#define HEIGHT WIDTH/2
#define SPACING 2

int *getDigitMask(int d);
int **getMasks(const char *str);
void printVertical(int maskL, int maskR);
void printHorizontal(int mask);

int main(int argc, char *argv[]){
	time_t current_time;
	char * time_string;
	printf("\x1b[2J");
	for(;;){
		time(&current_time);
		time_string = ctime(&current_time);
		printf("\x1b[H");
		printf("%s",time_string);
		int **masks = getMasks(time_string);
		//top
		for(int i=0; i<6; i++)
			printHorizontal(masks[i][0]);
		printf("\n");
		//left & right
		for(int j=0;j<HEIGHT;j++){
			for(int i=0; i<6; i++)
				printVertical(masks[i][3],masks[i][5]);
			printf("\n");
		}
		//mid
		for(int i=0; i<6; i++)
			printHorizontal(masks[i][1]);
		printf("\n");
		//left & right
		for(int j=0;j<HEIGHT;j++){
			for(int i=0; i<6; i++)
				printVertical(masks[i][4],masks[i][6]);
			printf("\n");
		}
		//bottom
		for(int i=0; i<6; i++)
			printHorizontal(masks[i][2]);

		for(int i=0; i<6; i++){
			free(masks[i]);
		}
		free(masks);
	}
}

int *getDigitMask(int d){
	int * mask = malloc(sizeof(int)*7);
	mask[0] = (d==1 || d==4)?0:1;		//top
	mask[1] = (d==1 || d==7 || d==0)?0:1;	//middle
	mask[2] = (d==1 || d==4 || d==7)?0:1;	//bottom
	mask[3] = ((d>0 && d<4) || d==7)?0:1;	//left top
	mask[4] = (d%2!=0 || d==4)?0:1;		//left bottom
	mask[5] = (d==5 || d==6)?0:1;		//right top
	mask[6] = (d==2)?0:1;			//right bottom
	return mask;
}

int **getMasks(const char * str){
	int ** masks = malloc(sizeof(int *)*6);
	int index = 0;
	while(*str!=':')
		str++;
	str-=2;
	for(int i=0; i<3; i++){
		masks[index++]=getDigitMask(*(str++)-'0');
		masks[index++]=getDigitMask(*(str++)-'0');
		str++;
	}
	return masks;
}

void printHorizontal(int mask){
	printf(" ");	
	for(int j=0;j<WIDTH;j++)
		printf("%c",mask?'@':'.');
	for(int i=0; i<SPACING+1; i++)
		printf(" ");	
	
}

void printVertical(int maskL, int maskR){
	printf("%c%*c",
		maskL?'@':'.',
		WIDTH+1,
		maskR?'@':'.');
	for(int i=0; i<SPACING; i++)
		printf(" ");	
}
