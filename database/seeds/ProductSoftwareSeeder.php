<?php

use Illuminate\Database\Seeder;
use App\Models\ProductSoftwares;

class ProductSoftwareSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_softwares')->truncate();
        
        DB::table('product_softwares')->insert([

            [
                'product_id' => '1',
                'name' => 'Microsoft Office',
                'version' => 'Office 2019',
                'publisher' => 'Microsoft',
                'site' => 'www.microsoft.com'
            ],
            [
                'product_id' => '1',
                'name' => 'Google Chrome',
                'version' => '83.0.4103.116',
                'publisher' => 'Google LLC',
                'site' => 'www.google.com'
            ],
            [
                'product_id' => '1',
                'name' => 'Steam',
                'version' => '2.10.91.91',
                'publisher' => 'Valve',
                'site' => 'www.valvesoftware.com'
            ],
            [
                'product_id' => '1',
                'name' => 'Xampp',
                'version' => '7.4.6',
                'publisher' => 'Bitnami',
                'site' => 'www.apachefriends.org'
            ],
        ]);
    }
}
