<?php

use Illuminate\Database\Seeder;
use App\UserRoles;

class UserRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_roles')->truncate();
        DB::table('user_roles')->insert([

            [
                'name' => 'buyer'
            ],
            [
                'name' => 'seller'
            ],
            [
                'name' => 'admin'
            ]

        ]);
    }
}
