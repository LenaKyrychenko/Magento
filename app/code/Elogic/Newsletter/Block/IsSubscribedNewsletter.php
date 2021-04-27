<?php

namespace Elogic\Newsletter\Block;

use Magento\Framework\View\Element\Template;
use Magento\Newsletter\Model\Subscriber;
use Magento\Newsletter\Controller\Subscriber as SubscriberController;

class IsSubscribedNewsletter extends Template
{
    /**
     * @var Subscriber
     */
    private $_subscriber;
    /**
     * @var \Magento\Customer\Model\Session
     */
    private $customerSession;

    /**
     * IsSubscribedNewsletter constructor.
     * @param Template\Context $context
     * @param Subscriber $subscriber
     * @param \Magento\Customer\Model\Session $customerSession
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        Subscriber $subscriber,
        \Magento\Customer\Model\Session $customerSession,
        array $data = []
    ) {
        $this->_subscriber= $subscriber;
        $this->customerSession = $customerSession;
        parent::__construct($context, $data);
    }

    /**
     * @return bool
     */
    public function checkCustomerIsSubscribe(): bool
    {
        $customerId = $this->customerSession->getCustomer()->getId();
        $checkSubscriber = $this->_subscriber->loadByCustomerId($customerId);

        if($checkSubscriber->isSubscribed()) {
            return true;
        } else {
            return false;
        }
    }
}
