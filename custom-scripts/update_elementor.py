import requests
import json
import os

WP_URL="https://vrwpaviv.elementor.cloud"
WP_USERNAME="itsmichellehu"
WP_PASSWORD="Frgl WJIB GPBf vfp9 Ht6C ioEp"

# 🔹 Mapping of Elementor Page IDs and Blocks
PAGES_TO_UPDATE = {
    "home": {
        "id": 41,  # Home Page Elementor ID
        "blocks": {
            "home.html": 0,   # First HTML widget
        }
    },
    "leadership": {
        "id": 675,  # About Page Elementor ID
        "blocks": {
            "leadership.html": 0,
        }
    },
    #     "give": {
    #     "id": 50,  # About Page Elementor ID
    #     "blocks": {
    #         "give.html": 0,
    #     }
    # }
}

# 🔹 Loop Through Each Page & Update Elementor Blocks
headers = {"Content-Type": "application/json"}
auth = (WP_USERNAME, WP_PASSWORD)

for page, data in PAGES_TO_UPDATE.items():
    PAGE_ID = data["id"]
    response = requests.get(f"{WP_URL}/wp-json/wp/v2/posts/{PAGE_ID}", auth=auth)

    if response.status_code == 200:
        elementor_data = response.json()
        content = json.loads(elementor_data["meta"]["_elementor_data"])

        for file_name, widget_index in data["blocks"].items():
            file_path = os.path.join(f"../webpack-project/dist/pages/{page}", file_name)  # ✅ Reads from Webpack's output
            if os.path.exists(file_path):
                with open(file_path, "r", encoding="utf-8") as file:
                    new_html_content = file.read()
                if widget_index < len(content) and content[widget_index]["widgetType"] == "html":
                    content[widget_index]["settings"]["html"] = new_html_content
                    print(f"✅ Updated {file_name} in {page} Elementor page")

        update_data = {"meta": {"_elementor_data": json.dumps(content)}}
        update_response = requests.post(
            f"{WP_URL}/wp-json/wp/v2/posts/{PAGE_ID}",
            headers=headers,
            auth=auth,
            json=update_data
        )

        if update_response.status_code == 200:
            print(f"✅ Successfully updated Elementor HTML Blocks for {page}!")
        else:
            print(f"❌ Error updating Elementor for {page}:", update_response.text)
    else:
        print(f"❌ Error fetching Elementor data for {page}:", response.text)