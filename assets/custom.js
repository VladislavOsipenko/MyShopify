document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function () {
        let toggleTubs = (e) => {
            e.preventDefault();
            let parentItem = $(e.currentTarget).parent();
            let elementActivatePosition = parentItem.index();

            let tabHeadList = parentItem.parent().children();
            let tabBodyList = parentItem.parent().parent().next().children().children();
            let activeTab = (elements, activeIndex) => {
                for (let item of elements) {
                    $(item).removeClass('active');
                    let elementPosition = $(item).index();
                    if (activeIndex == elementPosition) {
                        $(item).addClass('active')
                    }
                }
            }
            activeTab(tabHeadList, elementActivatePosition);
            activeTab(tabBodyList, elementActivatePosition);
        }

        $(document).on('click', '.list__link', (e) => toggleTubs(e));
    })
});
