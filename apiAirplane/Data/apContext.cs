using Microsoft.EntityFrameworkCore;
using apiAirplane.Model;
using FileContextCore;

namespace apiAirplane.Data
{
    public class apContext : DbContext
    {
        public apContext (DbContextOptions<apContext> options)
            : base(options)
        {
        }

        public DbSet<apiAirplane.Model.airplaneModel> airplaneModel { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseFileContextDatabase(databaseName: "apGolDB");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
