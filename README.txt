MICHEL CUEVAS HOME IMPROVEMENT — WEBSITE
==========================================

WHAT'S IN THIS FOLDER
----------------------
34 static HTML pages + assets/ (css, js, images), plus .htaccess,
robots.txt, and sitemap.xml. Upload the whole folder to your web host
and it works as-is. Open index.html locally to preview.

CLEAN (EXTENSIONLESS) URLS
---------------------------
Pages are linked as /residential-roofing instead of
/residential-roofing.html. The included .htaccess makes this work on
your (Apache/cPanel) server and 301-redirects any old .html links so
nothing breaks. IMPORTANT: the .htaccess is a hidden file. In cPanel
File Manager, turn on Settings > "Show Hidden Files (dotfiles)" so it
uploads/extracts too.

HTTPS: once your SSL certificate is active (cPanel AutoSSL), open
.htaccess and uncomment the three "Force HTTPS" lines near the top.

PAGES
-----
- index, services, service-areas, about, our-work, contact, financing
- 15 individual service pages
- 10 service-area pages: iowa-city, coralville, north-liberty, cedar-rapids, west-liberty, washington, muscatine, maquoketa, mt-pleasant, clarence

HOMEPAGE
--------
Optimized around "Roofing Contractor in Iowa City, IA" (title, meta
description, and H1 all target this), while still showcasing the full
service list. The hero has the "Request a Service" form stacked in the
right column. The 0% financing / no-payments-for-30-days offer has its
own dedicated band further down the page.

SEO / STRUCTURED DATA
----------------------
Every page carries RoofingContractor + GeneralContractor LocalBusiness
schema (JSON-LD) with your name, address, phone, hours, and the 7 towns
you serve, so Google can read your business info directly. Service and
area pages, plus the homepage, also carry FAQPage schema for their FAQs.

SERVICE PAGES (all 23, including Emergency Response and Full-Service)
------------------------------------------------------------------
Each one follows the same structure:
1. A hero using a real jobsite photo where we have one, or a styled
   icon treatment where we don't
2. A photo + copy section with a two-column feature checklist
3. A "Why Homeowners Choose Cuevas" 4-card row
4. A numbered "How It Works" 4-step process
5. An areas-served strip with links to all 7 town pages
6. The same request-a-service form, right on the page
7. 5 FAQs per page, in a two-column layout with a round +/x toggle
8. A final call-to-action banner

BEFORE YOU LAUNCH — PLEASE CHECK
---------------------------------
1. DOMAIN: canonical/OG tags, sitemap.xml, and the LocalBusiness schema
   all use https://www.michelcuevashome.com. If the real domain
   differs, tell me and I'll regenerate. (Assumed from your footer email.)
2. FORMS: every request form on the site (homepage hero, every service
   page, and the Contact page) submits via Web3Forms using your access
   key. Send a test after launch to confirm it reaches your inbox.
3. PHOTOS: real Cuevas jobsite photos are in use throughout, including
   the Cherry Street (North Liberty) reroof, a commercial multi-family
   siding project, active roofing/siding crews, your branded response
   trucks, and a real crew-member portrait on the About page. Services
   without a matching photo yet (concrete, most interior trades) use a
   styled icon treatment instead — swap in real photos as you shoot them.
4. LOGO/FAVICON: your logo is in the header/footer and the browser-tab
   favicon set was generated from it.
5. VIDEO HERO: homepage background is your YouTube video (muted/looping,
   starts at 0:07) with a dark gradient fallback if autoplay is blocked.
6. SUBMIT sitemap.xml to Google Search Console after launch, and verify
   the LocalBusiness markup with Google's Rich Results Test.

REBUILDING / EDITING
---------------------
Generated from Python (data.py, icons.py, render.py, build.py). Edit
copy/FAQs/photos in data.py or layout in build.py/render.py, then run:
python3 build.py
This README is regenerated automatically by build.py, so it will
always be included in the output folder.

v8 CHANGES
----------
- New layout and design (dark topo sections, torn edges, Oswald + Barlow
  type) using the existing black / maroon / off-white brand colors and the
  logo gold for highlights.
- Removed pages, each 301-redirected in .htaccess to the closest live page:
  industrial-roofing, drywall-repair, mud-tape-texture, emergency-services,
  full-service-home-improvement, exterior-property-management,
  demolition-services, marion, burlington.
- YouTube Shorts embedded on the homepage, about, our-work, residential
  roofing, roof repair, storm damage, iowa-city and north-liberty pages.
- Iowa City office address is now 1570 1st Ave, Unit M, Iowa City, IA 52240.
- TRACKING: every page has a marked comment right after <head> where the
  Google Analytics / Tag Manager snippet goes.
