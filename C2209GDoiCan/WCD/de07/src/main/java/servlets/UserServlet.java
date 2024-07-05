/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlets;

import dtos.StudentRegistrationDTO;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import lombok.*;
import dtos.*;
public class UserServlet extends HttpServlet {
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("haha");
        //post here        
        StudentRegistrationDTO registrationDTO = StudentRegistrationDTO
                .builder()
                .name(request.getParameter("name"))
                .address(request.getParameter("address"))
                .className(request.getParameter("className"))
                .phoneNumber(request.getParameter("phoneNumber"))
                .build();
        if (!registrationDTO.isValid()) {
            request.setAttribute("error", "All fields are required!");
            request.getRequestDispatcher("/registrationForm.jsp").forward(request, response);
            return;
        }

    }       
}
