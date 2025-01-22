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
        Schema::create('exam_types', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('module_id')->nullable();
            $table->string('subject_matter')->nullable();
            $table->longText('discussions')->nullable();
            $table->longText('link')->nullable();
            $table->string('type1')->nullable();
            $table->longText('direction1')->nullable();
            $table->string('type2')->nullable();
            $table->longText('direction2')->nullable();
            $table->string('file1')->nullable();
            $table->string('file2')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exam_types');
    }
};
