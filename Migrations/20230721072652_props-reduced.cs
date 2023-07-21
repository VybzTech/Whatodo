using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Whatodo.Migrations
{
    /// <inheritdoc />
    public partial class propsreduced : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Completed",
                table: "Todos");

            migrationBuilder.DropColumn(
                name: "Created",
                table: "Todos");

            migrationBuilder.DropColumn(
                name: "Edited",
                table: "Todos");

            migrationBuilder.DropColumn(
                name: "Team",
                table: "Todos");

            migrationBuilder.DropColumn(
                name: "TeamMember",
                table: "Todos");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Completed",
                table: "Todos",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Created",
                table: "Todos",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Edited",
                table: "Todos",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Team",
                table: "Todos",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TeamMember",
                table: "Todos",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
