<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();

        $user = User::create([
            'name' => env('ADMIN_FIRST_NAME'),
            'email' => env('ADMIN_EMAIL'),
            'password' => Hash::make(env('ADMIN_PASSWORD')),
           // 'confirmation' => 'approved',
            'email_verification_token' => Str::random(32),
        ]);

       // $user->assignRole('admin');
    }
}
