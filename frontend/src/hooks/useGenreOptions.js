import { useVocalGenres, useInstrumentalGenres } from "./useGenresData";

function useGenreOptions() {
    const { isSuccess: isSuccessVocalGenres, data: vocalGenres } = useVocalGenres();
    const { isSuccess: isSuccessInstrumentalGenres, data: instrumentalGenres } = useInstrumentalGenres();

    const genreColors = [
        '#e83f47',
        '#5e00a1',
        '#691a58',
        '#cd9c5c',
        '#131415'
    ];
    let vocalOptions = [];
    let instrumentalOptions = [];
    if (isSuccessVocalGenres && isSuccessInstrumentalGenres) {
        vocalOptions = vocalGenres.map((genre, index) => {
            return {
                value: `vocal-${genre.name}`,
                label: `${genre.name} (Vocal)`,
                color: genreColors[index % 5]
            }
        });
        instrumentalOptions = instrumentalGenres.map((genre, index) => {
            return {
                value: `instrumental-${genre.name}`,
                label: `${genre.name} (Instrumental)`,
                color: genreColors[index % 5]
            }
        });

    }
    return {
        isSuccess: (isSuccessInstrumentalGenres && isSuccessVocalGenres),
        data: [...vocalOptions, ...instrumentalOptions]
    };
}

export default useGenreOptions;