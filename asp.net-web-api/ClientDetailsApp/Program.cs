using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ClientDetailsApp.Data;
var builder = WebApplication.CreateBuilder(args);

//builder.Services.AddDbContext<CompanyDetailsAppContext>(options =>
//    options.UseInMemoryDatabase(builder.Configuration.GetConnectionString("ClientDetailsAppContext") ?? throw new InvalidOperationException("Connection string 'ClientDetailsAppContext' not found.")));

builder.Services.AddDbContext<CompanyDetailsAppContext>(options => options.UseInMemoryDatabase(databaseName: "Companies"));
// Add services to the container.

builder.Services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
{
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
}));



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("MyPolicy");
app.UseAuthorization();

app.MapControllers();

app.Run();
