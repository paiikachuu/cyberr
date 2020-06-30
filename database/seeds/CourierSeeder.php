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
        $items = array(
            'Grab Express',
            'Lala Move',
            'J&T Express',
            'Ninjavan',
            'Angkas',
            'Pickup'
        );

        DB::table('couriers')->truncate();

        foreach ($items as $item) {
            Courier::create([
                'name' => $item,    
            ]);
        }
    }
}
