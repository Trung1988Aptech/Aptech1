using bai05.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Product}/{action=Index}/{id?}");

app.Run();
/*
 T?o cho tôi 2 b?ng sau dây, các ràng bu?c vi?t riêng dua vào câu l?nh t?o b?ng: 
 Create a table named Products with the following columns:
Id (int, primary key)
Name (string, required, min length 5, max length 255)
Price (decimal, required, min value 0)
Description (string)
Quantity (int, required, min value 0)
Create a table named Orders with the following columns:
Id (int, primary key)
OrderDate (datetime)
CustomerPhone (string, min length 6, max length 15, required)
ProductId (int, foreign key)
Quantity (int, required, min value 1)
 */
