const { src,dest, watch }=require('gulp');
const sass=require('gulp-sass')(require('sass'));
const plumber=require('gulp-plumber');

function css(done){
    // Identificar el archivo que se va a compilar
    src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass()) // Complilar el archivo
        .pipe(dest("build/css"));// Guardar el archivo compilado en una carpeta
    done();
}

function dev(done){
    watch('src/scss/**/*.scss',css);
    done();
}

exports.css = css;
exports.dev = dev;