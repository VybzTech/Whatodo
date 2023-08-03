using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Whatodo.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Task",
                table: "Todos",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

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
                name: "Folder",
                table: "Todos",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Notes",
                table: "Todos",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Team",
                table: "Todos",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                name: "Folder",
                table: "Todos");

            migrationBuilder.DropColumn(
                name: "Notes",
                table: "Todos");

            migrationBuilder.DropColumn(
                name: "Team",
                table: "Todos");

            migrationBuilder.AlterColumn<string>(
                name: "Task",
                table: "Todos",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }
    }
}
