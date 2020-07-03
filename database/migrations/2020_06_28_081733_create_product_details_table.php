<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_details', function (Blueprint $table) {
            $table->id();
            $table->integer('product_id');
            $table->string('operating_system');
            $table->string('processor_type');
            $table->string('memory'); 
            $table->string('hard_drive');
            $table->string('graphics_card');
            $table->string('warranty');
            $table->string('insurance');
            $table->string('virus_protection_software');
            $table->string('battery');
            $table->string('sound');
            $table->string('camera');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_details');
    }
}
