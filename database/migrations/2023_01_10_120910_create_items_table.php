<?php

use App\Models\Item;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('brand');
            $table->integer('price');
            $table->timestamps();
        });

        Item::create(['name' => 'Túró', 'brand' => 'Kecske', 'price'=> 1241]);
        Item::create(['name' => 'Sajt', 'brand' => 'Kecske', 'price'=> 1423]);
        Item::create(['name' => 'Tej', 'brand' => 'Kecske', 'price'=> 1]);
        Item::create(['name' => 'BMW', 'brand' => 'BMV', 'price'=> 14256]);
        Item::create(['name' => 'Csoki', 'brand' => 'Csoki', 'price'=> 5]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
};
