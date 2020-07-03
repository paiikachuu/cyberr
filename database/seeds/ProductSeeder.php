<?php

use Illuminate\Database\Seeder;
use App\Products;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->truncate();
        DB::table('products')->insert([

            [
                'category_id' => '1',
                'name' => 'ACER NITRO 5',
                'description' => 'Laptop description',
                'video_url' => '',
                'sold_items' => 2,
                'price' => 40000,
            ],
            [
                'category_id' => '1',
                'name' => 'HP Pavillion',
                'description' => 'Laptop description',
                'video_url' => '',
                'sold_items' => 5,
                'price' => 60000,
            ],
            [
                'category_id' => '2',
                'name' => 'Iphone X',
                'description' => 'Iphone Description',
                'video_url' => '',
                'sold_items' => 2,
                'price' => 59000,
            ]
            ,
            [
                'category_id' => '2',
                'name' => 'Iphone 6',
                'description' => 'Iphone 6 description',
                'video_url' => '',
                'sold_items' => 2,
                'price' => 7000,
            ]
            ,
            [
                'category_id' => '3',
                'name' => 'JBL Bluetooth Speaker',
                'description' => 'JBL Bluetooth description',
                'video_url' => '',
                'sold_items' => 2,
                'price' => 10000,
            ]

        ]);
    }
}
