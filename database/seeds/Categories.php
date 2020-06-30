<?php

use Illuminate\Database\Seeder;

class Categories extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = array(
            'Laptops',
            'Smartphones',
            'Wireless Speakers',
            'Watches'
        );

        DB::table('categories')->truncate();

        foreach ($categories as $category) {
            Courier::create([
                'name' => $category,    
            ]);
        }
    }
}
