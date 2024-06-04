#include <iostream>
#include <stdio.h>
#include <cstring> 
using namespace std;

//#define MAX_NUMBER_OF_COURSES 100
const int MAX_NUMBER_OF_COURSES = 100;
struct Course {
    char authorName[50];
    char courseName[100];
    int  price;
    char address[150];
    char description[200];
    char startedDate[15];
};
int main() {
    int numberOfCourses = 0;
    Course courses[MAX_NUMBER_OF_COURSES];
    cout <<"Enter number of courses: ";
    cin >> numberOfCourses;
    cin.ignore();
    if(numberOfCourses < 0 || numberOfCourses > MAX_NUMBER_OF_COURSES) {
        cout << "Please enter positive number !";        
        return 0;
    }

    for(int i = 0; i < numberOfCourses; i++) {
        Course newCourse;
        
        cout << "Enter author's name:";
        cin.getline(newCourse.authorName, 50);
        
        cout << "Enter courseName:";
        cin.getline(newCourse.courseName, 100);
        

        cout << "Enter price: ";
        cin>>newCourse.price;
        cin.ignore();

        cout << "Enter address:";
        cin.getline(newCourse.address, 150);
        

        cout << "Enter description:";
        cin.getline(newCourse.description, 200);
        

        cout << "Enter startedDate(yyyy-mm-dd, eg: 2014-12-23):";
        cin.getline(newCourse.startedDate, 15);
        
        courses[i] = newCourse;        
    }
    return 0;
}