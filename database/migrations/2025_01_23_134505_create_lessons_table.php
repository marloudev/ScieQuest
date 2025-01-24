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

        Schema::create('lessons', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('module_id')->nullable();
            $table->string('subject_matter')->nullable();
            $table->longText('discussion')->nullable();
            $table->string('link')->nullable();
            $table->string('file')->nullable();
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lessons');
    }
};
