using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Whatodo.Migrations
{
    /// <inheritdoc />
    public partial class removeedited : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Edited",
                table: "Todos");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Edited",
                table: "Todos",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
