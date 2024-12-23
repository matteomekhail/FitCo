<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
       public function up()
    {
        if (!Schema::hasTable('failed_jobs')) {
            Schema::create('failed_jobs', function (Blueprint $table) {
                $table->id();
                $table->string('uuid')->unique();
                $table->text('connection');
                $table->text('queue');
                $table->longText('payload');
                $table->longText('exception');
                $table->timestamp('failed_at')->useCurrent();
            });
        } else {
            Schema::table('failed_jobs', function (Blueprint $table) {
                if (!Schema::hasColumn('failed_jobs', 'id')) {
                    $table->id();
                }
                if (!Schema::hasColumn('failed_jobs', 'uuid')) {
                    $table->string('uuid')->unique();
                }
                if (!Schema::hasColumn('failed_jobs', 'connection')) {
                    $table->text('connection');
                }
                if (!Schema::hasColumn('failed_jobs', 'queue')) {
                    $table->text('queue');
                }
                if (!Schema::hasColumn('failed_jobs', 'payload')) {
                    $table->longText('payload');
                }
                if (!Schema::hasColumn('failed_jobs', 'exception')) {
                    $table->longText('exception');
                }
                if (!Schema::hasColumn('failed_jobs', 'failed_at')) {
                    $table->timestamp('failed_at')->useCurrent();
                }
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
        Schema::dropIfExists('job_batches');
        Schema::dropIfExists('failed_jobs');
    }
};
