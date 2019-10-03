
import define from "@robinl/energy-usage-calculator-for-everyday-activities"
import ObservablePage from "../components/obs_page"


let output_order = [
    "title",
    "under_title_blurb",
    "key_to_graphics_title",
    "key_to_graphics_text",
    "driving_title",
    "driving_text_output",
    "driving_chart_output",
    "flying_title",
    "flying_text_output",
    "flying_chart_output",
    "heating_title",
    "heating_text_output",
    "heating_chart_output",
    "stuff_title",
    "stuff_text_output",
    "stuff_chart_output",
    "showers_title",
    "showers_text_output",
    "showers_chart_output",
    "eating_title",
    "eating_text_output",
    "eating_chart_output",
    "washing_title",
    "washing_text_output",
    "washing_chart_output",
    "dogs_title",
    "dogs_text_output",
    "dogs_chart_output",
    "summary_title",
    "summary_text_output",
    "summary_chart_output",
    "summary_text_output_2",
    "treemap_output"

]


export default ({ data }) => (
    ObservablePage(define, output_order)
)

