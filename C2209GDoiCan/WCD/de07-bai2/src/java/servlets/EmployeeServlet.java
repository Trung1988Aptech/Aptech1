/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;
import javax.persistence.*;
import models.Employee;

/**
 *
 * @author nguye
 */
public class EmployeeServlet extends HttpServlet{
    private EntityManagerFactory emf = 
            Persistence.createEntityManagerFactory("de07-bai2PU");
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
            throws ServletException, IOException {
        
        EntityManager em = null;
        try {
            em = emf.createEntityManager();
            TypedQuery<Employee> query = em.createNamedQuery("Employee.findAll", Employee.class);
            List<Employee> employees = query.getResultList();
            req.setAttribute("employees", employees);
            req.getRequestDispatcher("/employees.jsp").forward(req, resp);
        } catch (Exception e) {
            throw new ServletException("Error retrieving employees", e);
        } finally {
            if(em != null) {
                em.close();
            }
        }
        super.doGet(req, resp); // Typically, you wouldn't call super.doGet() here
    }
    
}