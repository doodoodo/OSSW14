from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import csv


# 다나와 SSD 크롤링

options = webdriver.ChromeOptions()
options.add_experimental_option("excludeSwitches", ["enable-logging"])
driver = webdriver.Chrome(options=options)

#driver = webdriver.Chrome(options=options) # 브라우저 창 안보이기
#driver = webdriver.Chrome() # 브라우저 창 보이기
 
# 크롬 브라우저 내부 대기 (암묵적 대기)
driver.implicitly_wait(5)
# 브라우저 사이즈
driver.set_window_size(1920,1080)

# 페이지 이동
url = 'http://prod.danawa.com/list/?cate=11236855'
driver.get(url)
 
# 페이지 내용
# print('Page Contents : {}'.format(driver.page_source))
 

# -해외구매 -중고 -렌탈 제외하기
except_word = ' -해외구매 -중고 -렌탈'
SearchKeywordBox = driver.find_element(By.ID,'innerSearchKeyword')
SearchKeywordBox.send_keys(except_word)
time.sleep(2)
SearchKeywordBox.send_keys(Keys.ENTER)

# 2차 페이지 내용
# print('After Page Contents : {}'.format(driver.page_source))
 
# 검색 결과가 렌더링 될 때까지 잠시 대기
time.sleep(3)

#
hyperlink_list = []
#txt 경로 설정
f = open("Capstone\coolerhref.txt", 'w', encoding='utf8')
title = "고유번호 이름 가격 img 스펙".split(" ")
f1 = open("Capstone\coolerimg.csv", 'w',newline='', encoding='utf8')
csv.writer(f1).writerow(title)

#페이지 번호 저장
MB_XPATH_1 = '//*[@id="searchAttributeValueRep4015"]'
WebDriverWait(driver,3).until(EC.presence_of_element_located((By.XPATH,MB_XPATH_1))).click()
time.sleep(2)

while True:
    lis = []
    # 제품리스트를 담고있는 class
    #main_prod_list = driver.find_element(By.CLASS_NAME,'main_prodlist')
    main_prod_list = WebDriverWait(driver,3).until(EC.presence_of_element_located((By.CLASS_NAME,'main_prodlist')))

    # 리스트에 각 ssd이름이  webelement class로 저장됨
    lis = main_prod_list.find_elements(By.CLASS_NAME,'prod_layer')

    for element in lis:
        # 기본설정 레이어 제거
        if 'product-pot' in element.get_attribute('class'):
            continue
        
        # 다나와 제품
        prod_name = element.find_element(By.NAME,'productName').text
        prod_id_class = element.find_element(By.CLASS_NAME,'prod_pricelist')
        prod_id_list = prod_id_class.find_elements(By.TAG_NAME,'li')
        prod_thumb = element.find_element(By.CLASS_NAME,'thumb_image')
        prod_img = prod_thumb.find_element(By.TAG_NAME,'img')
        prod_img_url = prod_img.get_attribute('src')
        if prod_img_url == 'http://img.danawa.com/new/noData/img/noImg_160.gif':
            prod_img_url = 'http:' + prod_img.get_attribute('data-original')
        prod_spec = element.find_element(By.CLASS_NAME,'spec_list').text
        prod_spec = prod_spec.replace(',','')
        prod_spec = prod_spec.replace('\n',' ')
        for ele in prod_id_list:
            price = ele.find_element(By.CLASS_NAME,'price_sect').text.replace('가격정보 더보기','')
            price = price.replace('원','')
            price = price.replace(',','')
            memory = ele.find_element(By.CLASS_NAME,'memory_sect').text
            memory = memory.replace('2위','')
            memory = memory.replace('1위','')
            prod_name = prod_name + memory
            f.write(prod_name+'\n')
            prod_idd = ele.get_attribute('id').replace('productInfoDetail_','')
            f.write(prod_idd+'\n')
            f.write(price+'\n')
            f.write(prod_img_url+'\n')
            f.write(prod_spec+'\n')
            csv.writer(f1).writerow([prod_name.strip(),prod_idd.strip(),price.strip(),prod_img_url.strip(),prod_spec.strip()])
            prod_name = prod_name.replace(memory,'')
            
        

# 페이지 넘기기
    #현재페이지 정보를 얻어온다
    
    
    #number_wrap = driver.find_element(By.CLASS_NAME,'number_wrap')
    number_wrap = WebDriverWait(driver,3).until(EC.presence_of_element_located((By.CLASS_NAME,'number_wrap')))
    number_wrap_list = number_wrap.find_elements(By.CLASS_NAME,'num')
    number_list = []
    for i in number_wrap_list:
        number_list.append(int(i.text))

    current_page_num = int(number_wrap.find_element(By.CLASS_NAME,'now_on').text)
    
    # 마지막페이지가 아니면 번호를 눌러 이동가능
    if current_page_num%10 != 0:
        #다음페이지가 존재하면
        if (current_page_num+1) in number_list:
            # 각 페이지번호 class를 조사해 맞는 class 찾기
            for element in number_wrap_list:
                #클릭하기
                if (current_page_num+1) == int(element.text):
                    element.click()
                    time.sleep(4)
                    break
                    
        else:
            break
    else:
        # 10페이지 경우 next_nav 버튼 누름
        try:
            next_button = driver.find_element(By.CLASS_NAME,'nav_next')
            next_button.click()
            time.sleep(4)
        except:
            break
    
# 제품 리스트 주소파싱 브라우저 종료
driver.close()

f.close()
f1.close()
    
