<?php

use Illuminate\Database\Seeder;
use App\Courier;

class CourierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('couriers')->truncate();
        DB::table('couriers')->insert([
            [
                'name' => 'Grab Express',
            ],
            [
                'name' => 'Lala Move',
            ],
            [
                'name' => 'J&T Express',
            ],
            [
                'name' => 'Ninjavan',
            ],
            [
                'name' => 'Angkas',
            ],
            [
                'name' => 'Pickup',
            ],

        ]);
    }
}
