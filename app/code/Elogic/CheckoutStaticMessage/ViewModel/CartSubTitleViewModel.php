<?php

namespace Elogic\CheckoutStaticMessage\ViewModel;

use Magento\Checkout\Model\Session;

class CartSubTitleViewModel implements \Magento\Framework\View\Element\Block\ArgumentInterface
{
    /**
     * @var Session
     */
    private $_session;
    protected $helperData;

    public function __construct(
        Session $session,
        \Elogic\CheckoutStaticMessage\Helper\Data $helperData
    ) {
        $this->_session = $session;
        $this->helperData = $helperData;
    }

    public function getCartSubTitle()
    {
        return $this->helperData->getGeneralConfig('display_text');
    }

    public function isCartEmpty()
    {
        $items = count($this->_session->getQuote()->getAllVisibleItems());
        if($items !== 0){
            return $this->getCartSubTitle();
        }
        else
        {
            return false;
        }
    }
}
