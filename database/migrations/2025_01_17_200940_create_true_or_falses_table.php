<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('true_or_falses', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('exam_types_id')->nullable();
            $table->longText('question')->nullable();
            $table->string('answer')->nullable();
            $table->string('answer_key')->nullable();
            $table->integer('points')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('true_or_falses');
    }
};
