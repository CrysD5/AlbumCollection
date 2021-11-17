using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace album_collection.Migrations
{
    public partial class updateDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: 1,
                column: "ReviewDate",
                value: new DateTime(2021, 11, 17, 14, 32, 26, 68, DateTimeKind.Local).AddTicks(9582));

            migrationBuilder.UpdateData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: 2,
                column: "ReviewDate",
                value: new DateTime(2021, 11, 17, 14, 32, 26, 72, DateTimeKind.Local).AddTicks(7747));

            migrationBuilder.UpdateData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: 3,
                column: "ReviewDate",
                value: new DateTime(2021, 11, 17, 14, 32, 26, 72, DateTimeKind.Local).AddTicks(7801));

            migrationBuilder.UpdateData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: 4,
                column: "ReviewDate",
                value: new DateTime(2021, 11, 17, 14, 32, 26, 72, DateTimeKind.Local).AddTicks(7809));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: 1,
                column: "ReviewDate",
                value: new DateTime(2021, 11, 17, 18, 18, 25, 615, DateTimeKind.Utc).AddTicks(1206));

            migrationBuilder.UpdateData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: 2,
                column: "ReviewDate",
                value: new DateTime(2021, 11, 17, 18, 18, 25, 615, DateTimeKind.Utc).AddTicks(1545));

            migrationBuilder.UpdateData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: 3,
                column: "ReviewDate",
                value: new DateTime(2021, 11, 17, 18, 18, 25, 615, DateTimeKind.Utc).AddTicks(1547));

            migrationBuilder.UpdateData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: 4,
                column: "ReviewDate",
                value: new DateTime(2021, 11, 17, 18, 18, 25, 615, DateTimeKind.Utc).AddTicks(1549));
        }
    }
}
