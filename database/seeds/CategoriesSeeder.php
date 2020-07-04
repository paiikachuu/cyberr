<?php

use Illuminate\Database\Seeder;
use App\Models\Categories;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->truncate();
        
        $categories = array(
            'Laptop',
            'Mobile',
            'Tablet',
            'Desktop'
        );

        DB::table('categories')->truncate();

        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'name' => $category, 
            ]);
           
        }
    }
}
