<?php

use Illuminate\Database\Seeder;
use App\Categories;

class CategoriesSeeder extends Seeder
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

       // DB::table('categories')->truncate();

        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'name' => $category, 
            ]);
           
        }
    }
}
