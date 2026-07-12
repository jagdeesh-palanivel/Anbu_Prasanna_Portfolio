def get_portfolio_data():
    profile = {
        "name": "Anbu Prasanna",
        "last_name": "L",
        "degree": "B.Sc Fashion & Apparel Design",
        "role": "Fashion Designer & Creative Strategist",
        "tagline": "Weaving fashion with storytelling.",
        "location": "Bengaluru, India",
        "email": "anbuprasannal435@gmail.com",
        "linkedin_url": "https://www.linkedin.com/in/anbu-prasanna-l-11602335b/",
        "photo": "/static/Profile/profile.jpg"
    }

    projects = [
        {
            "id": 1,
            "title": "Fashionista",
            "category": "Whimsical Wings",
            "year": "2025",
            "desc": "A futuristic menswear collection inspired by butterfly wings and stained glass. Used laser cutting and glass painting techniques.",
            "award": "Award: Best Futuristic Collection",
            "images": [
                "/static/Whimsical_Wings/1.png",
                "/static/Whimsical_Wings/2.png",
                "/static/Whimsical_Wings/3.png",
                "/static/Whimsical_Wings/4.png",
                "/static/Whimsical_Wings/5.png",
                "/static/Whimsical_Wings/6.png",
                "/static/Whimsical_Wings/7.png",
            ]
        },
        {
            "id": 2,
            "title": "Goldenista",
            "category": "Vedic Revival",
            "year": "2024",
            "desc": "Recreating early Vedic fashion with modern silhouettes. A deep dive into historical draping and gold silks.",
            "award": "Award: Second Runner-up",
            "images": [
                "/static/Goldenista/1.jpg",
                "/static/Goldenista/2.jpg",
                "/static/Goldenista/3.jpg",
                "/static/Goldenista/4.jpg",
            ]
        },
        {
            "id": 3,
            "title": "Trashion",
            "category": "Sustainable Design",
            "year": "2023",
            "desc": "Solo sustainable fashion project using repurposed denims and trousers to create high-fashion garments.",
            "award": "Featured in Neo Fashionista",
            "images": [
                "/static/Trashion/1.jpg",
                "/static/Trashion/2.jpg",
            ]
        }
    ]

    creative_archive = [
        {"title": "Best Futuristic Award", "img": "/static/Archive/1.png"},
        {"title": "Black Mamba - Hostel Day", "img": "/static/Archive/2.jpg"},
        {"title": "Draping", "img": "/static/Archive/3.jpg"},
        {"title": "Fashionista - Jury Day", "img": "/static/Archive/4.jpg"},
    ]

    pdf_portfolios = [
        {
            "title": "Fashionista Portfolio 2025",
            "desc": "A comprehensive compilation of my Whimsical Wings collections, illustrations, and technical drawings.",
            "path": "/static/Portfolios/Fashionista_Portfolio.pdf"
        },
        {
            "title": "Coastal Couture Portfolio",
            "desc": "'Coastal Couture' is a luxurious, modern swimwear collection that fuses bold, dark hues with the vibrant energy of the midday sun to create a dramatic and elegant beach aesthetic.",
            "path": "/static/Portfolios/Coastal_Couture.pdf"
        },
        {
            "title": "Fashion Accessories Lookbook",
            "path": "/static/Portfolios/FASHION_ACCESSORIES.pdf"
        },
        {
            "title": "Illustration Lookbook",
            "path": "/static/Portfolios/Fashion_Illustration.pdf"
        },

    ]

    social_posts = [
        {"title": "Visual Merchandising Display", "img": "/static/Social_Media/1.jpg"},
        {"title": "Campaign Styling", "img": "/static/Social_Media/2.jpg"},
        {"title": "Brand Storytelling", "img": "/static/Social_Media/3.jpg"},
        {"title": "Brand Storytelling", "img": "/static/Social_Media/4.jpg"},
        {"title": "Brand Storytelling", "img": "/static/Social_Media/5.jpg"},
        {"title": "Brand Storytelling", "img": "/static/Social_Media/6.jpg"},
    ]

    illustrations = [
        {"title": "Draping Study", "img": "/static/Illustrations/1.jpg"},
        {"title": "Draping Study", "img": "/static/Illustrations/2.jpg"},
        {"title": "Fabric Manipulation", "img": "/static/Illustrations/3.jpg"},
        {"title": "Glass Art Sketches", "img": "/static/Illustrations/4.jpg"},
        {"title": "Moodboarding", "img": "/static/Illustrations/5.jpg"},
        {"title": "Draping Study", "img": "/static/Illustrations/6.jpg"},
        {"title": "Draping Study", "img": "/static/Illustrations/7.jpg"},
        {"title": "Draping Study", "img": "/static/Illustrations/8.jpg"},
        {"title": "Draping Study", "img": "/static/Illustrations/9.jpg"},
        {"title": "Draping Study", "img": "/static/Illustrations/10.jpg"},
        {"title": "Draping Study", "img": "/static/Illustrations/11.jpg"},
        {"title": "Draping Study", "img": "/static/Illustrations/12.jpg"},
        {"title": "Draping Study", "img": "/static/Illustrations/13.jpg"},
        {"title": "Draping Study", "img": "/static/Illustrations/14.jpg"},
    ]

    experience = [
        {
            "role": "Intern - Fashion Designer",
            "org": "The Gymtonico Retail, Bangalore",
            "date": "March 2026 - Present",
            "desc": "Created tech packs for athleisure and gymwear designs using Adobe Illustrator. Contributed to trend research and color analysis to align new collection development. Developed flat sketches and technical drawings for design development."
        },
        {
            "role": "Asst. Fashion Designer & VM Intern",
            "org": "Myth Era, Bangalore",
            "date": "Sep - Nov 2025",
            "desc": "Assisted design team in creating new prototypes, designed visual merchandising displays, and managed social media marketing content."
        },
        {
            "role": "Fashion Stylist & Marketing Intern",
            "org": "7D Ad Valley, Bangalore",
            "date": "July - Aug 2025",
            "desc": "Designed costumes and backgrounds for shoots. Created digital concepts using Photoshop/Illustrator and developed social media strategies."
        },
        {
            "role": "Apparel Industry Intern",
            "org": "Samurai Exports Pvt Ltd, Bangalore",
            "date": "May - June 2024",
            "desc": "Optimized workforce processes through time studies and collaborated with production teams to meet daily targets."
        }
    ]

    education = [
        {"degree": "B.Sc Fashion & Apparel Design", "school": "Mount Carmel College, Bangalore", "year": "2022 - 2025", "grade": "75.25%"},
        {"degree": "PUC (PCMB)", "school": "John Bosco Matriculation, Kovilpatti", "year": "2020 - 2022", "grade": "75%"}
    ]

    skills = {
        "Design & Tech": ["Adobe Illustrator", "Adobe Photoshop", "CorelDRAW", "3D CAD Illustration"],
        "Craftsmanship": ["Pattern Making", "Garment Construction", "Aari Embroidery", "Glass Art", "Needlework"],
        "Strategy": [ "Visual Merchandising", "Social Media Management", "Marketing", "Trend Research", "Styling", "Time Study"]
    }

    return {
        "profile": profile,
        "projects": projects,
        "creative_archive": creative_archive,
        "pdf_portfolios": pdf_portfolios,
        "social_posts": social_posts,
        "illustrations": illustrations,
        "experience": experience,
        "education": education,
        "skills": skills
    }
