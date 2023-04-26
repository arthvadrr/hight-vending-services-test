const updateYearOnload = () => {
    const $div_year = document.getElementById('footer-year');
    if ($div_year) {
        
        $div_year.innerText = new Date().getFullYear();
    }
}

export default updateYearOnload;