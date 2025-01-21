<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'fname' =>'admin',
            'lname' =>'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin'),
            // 'address' =>'San Carlos City',
            'user_type' =>'1',
        ]);
    }
}
