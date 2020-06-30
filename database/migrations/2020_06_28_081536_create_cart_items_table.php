<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cart_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('product_detail_id');
            $table->boolean('saved_for_later');
            $table->unsignedBigInteger('quantity');
            $table->timestamps();

            // $table->foreign('user_id')->references('id')->on($tableNames['users']);
            // $table->foreign('product_detail_id')->references('id')->on($tableNames['product_details']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cart_items');
    }
}
